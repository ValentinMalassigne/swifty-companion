import { Event } from '../types/event';

export const fetchEventsByCampus = async (token: string, campusId: number): Promise<Event[]> => {
  try {
    const response = await fetch(`https://api.intra.42.fr/v2/campus/${campusId}/events?page[size]=5`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.status}`);
    }

    const eventsData: Event[] = await response.json();
    console.log("response json from fetchEventsByCampus:", eventsData[0]);
    // GET /v2/events/:event_id/events_users
    return eventsData;
  } catch (error) {
    throw new Error(`Failed to fetch events: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const registerForEvent = async (token: string, eventId: number, userId: number): Promise<void> => {
  try {

    // https://api.intra.42.fr/oauth/token/info
    const response = await fetch(`https://api.intra.42.fr/v2/events_users`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        events_user: {
          user_id: userId,
          event_id: eventId,
        },
      }),
    });


    const responseData = await response.json();

    console.log("response json from registerForEvent:", responseData);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to register for event: ${errorData.message || response.status}`);
    }
  } catch (error) {
    throw new Error(`Failed to register for event: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
