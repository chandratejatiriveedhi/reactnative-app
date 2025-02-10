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

    // Make request to Google Cloud Vision API
    const visionResponse = await fetch('https://vision.googleapis.com/v1/images:annotate?key=YOUR_API_KEY', {
      method: 'POST',
      headers: {
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
    return {
      labels: data.responses[0]?.labelAnnotations || [],
      objects: data.responses[0]?.localizedObjectAnnotations || [],
      text: data.responses[0]?.textAnnotations || [],
      faces: data.responses[0]?.faceAnnotations || []
    };
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
};