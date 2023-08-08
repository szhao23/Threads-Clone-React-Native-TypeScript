import { faker } from "@faker-js/faker";
import { Thread, User } from "../types/threads";

// Create a Random Follower
export function createRandomFollower(): User {
  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.firstName() + " " + faker.person.lastName(),
    // True or False Random
    verified: Math.random() >= 0.5,
    bio: faker.person.bio(),
    username: faker.internet.userName(),
    link: faker.internet.url(),
    // followers:
  };
}

// Create a Random User
export function createRandomUser(): User {
  // const name = faker.person.firstName() + " " + faker.person.lastName();

  // Alternate Method
  // const firstName = faker.person.firstName();
  // const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.firstName() + " " + faker.person.lastName(),
    // True or False Random
    verified: Math.random() >= 0.5,
    bio: faker.person.bio(),
    username: faker.internet.userName(),
    link: faker.internet.url(),
    // Each user can have at least 10 followers
    followers: new Array(Math.floor(Math.random() * 10))
      .fill(null)
      // Generates an array of Random Followers
      .map((_) => createRandomFollower()),
  };
}

// Create a Random Thread
export function createRandomThread(): Thread {
  const author = createRandomUser();
  const mentionUser = createRandomUser();

  return {
    id: faker.string.uuid(),
    author,
    content: faker.lorem.paragraph(),
    // Allow Thread posts to have an image or no image
    image: Math.random() > 0.5 ? faker.image.url() : undefined,
    replies: new Array(Math.floor(Math.random() * 10)).fill(null).map(() => ({
      id: faker.string.uuid(),
      author: createRandomUser(),
      content: faker.lorem.sentence(),
      likes: Math.floor(Math.random() * 1000),
      createdAt: faker.date.recent().toISOString(),
    })),
    repliesCount: Math.floor(Math.random() * 100),
    likesCount: Math.floor(Math.random() * 1000),
    mention: Math.random() > 0.5,
    mentionUser,
    createdAt: faker.date.recent().toISOString(),
  };
}

// Generate about 50 Threads every Refresh
export function generateThreads(): Thread[] {
  return new Array(50).fill(null).map((_) => createRandomThread());
}
