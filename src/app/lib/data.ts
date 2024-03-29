export async function fetchImage(id: string | undefined) {
  try {
    const response = await fetch(`https://backend.bixindex.hu/public/event/photo/${id}`);
    // ???
    return response.url;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
}

export async function deleteEvent(id: string) {
  console.log('esemény törlése.');
  console.log(JSON.stringify({ id }))
}

export async function postEvent(event: object) {
  console.log('új esemény');
  console.log(JSON.stringify(event))
}

export async function putEvent(event: object, id: string | undefined) {
  console.log('esemény módosítása');
  console.log('esemény ID:', JSON.stringify({ id }));
  console.log(JSON.stringify(event))
}