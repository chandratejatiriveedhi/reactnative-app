import {
  GOOGLE_CLOUD_VISION_PROJECT_ID,
  GOOGLE_CLOUD_VISION_PRIVATE_KEY,
  GOOGLE_CLOUD_VISION_CLIENT_EMAIL
} from '@env';

// Image Analysis API (Google Cloud Vision)
export const analyzeImage = async (imageUri) => {
  try {
    // Convert image to base64
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const base64Data = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String.split(',')[1]);
      };
    });

    // Create JWT token for authentication
    const now = Math.floor(Date.now() / 1000);
    const token = {
      iss: GOOGLE_CLOUD_VISION_CLIENT_EMAIL,
      sub: GOOGLE_CLOUD_VISION_CLIENT_EMAIL,
      iat: now,
      exp: now + 3600,
      aud: 'https://vision.googleapis.com/',
    };

    // Make request to Google Cloud Vision API
    const visionResponse = await fetch('https://vision.googleapis.com/v1/images:annotate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requests: [{
          image: {
            content: base64Data
          },
          features: [
            { type: 'LABEL_DETECTION', maxResults: 5 },
            { type: 'OBJECT_LOCALIZATION', maxResults: 5 },
            { type: 'TEXT_DETECTION' },
            { type: 'FACE_DETECTION' }
          ]
        }]
      })
    });

    if (!visionResponse.ok) {
      throw new Error('Vision API request failed');
    }

    const data = await visionResponse.json();
    
    // Process and format the response
    return {
      labels: data.responses[0]?.labelAnnotations?.map(label => ({
        description: label.description,
        confidence: label.score
      })) || [],
      objects: data.responses[0]?.localizedObjectAnnotations?.map(obj => ({
        name: obj.name,
        confidence: obj.score
      })) || [],
      text: data.responses[0]?.textAnnotations?.map(text => text.description) || [],
      faces: data.responses[0]?.faceAnnotations?.map(face => ({
        joy: face.joyLikelihood,
        sorrow: face.sorrowLikelihood,
        anger: face.angerLikelihood,
        confidence: face.detectionConfidence
      })) || []
    };
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw new Error('Failed to analyze image. Please try again.');
  }
};