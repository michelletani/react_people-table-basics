import { Person } from './types';

const PEOPLE_URL =
  'https://mate-academy.github.io/react_people-table/api/people.json';

export async function getPeople(): Promise<Person[]> {
  const response = await fetch(PEOPLE_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch people: ${response.statusText}`);
  }

  return response.json();
}
