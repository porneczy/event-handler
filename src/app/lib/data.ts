export async function fetchImage(id: string | undefined) {
  try {
    const response = await fetch(`https://backend.bixindex.hu/public/event/photo/${id}`);

    return response.url;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
}