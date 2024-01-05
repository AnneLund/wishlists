import appService from "../Appservices/App.service";
import { api_member1, api_member2, api_member3, api_member4, api_all_members } from "../Appservices/api_urls";
import rebecca from "../Assets/Images/rebecca.JPG";
import valdemar from "../Assets/Images/valdemar.jpg";
import mikkel from "../Assets/Images/mikkel.PNG";
import anne from "../Assets/Images/anne.JPG";
import family from "../Assets/Images/family.jpg";

export const useMembers = () => {
  const membersObject = {
    1: {
      member: "member1",
      name: "Anne",
      username: "anne",
      loggedInId: 1,
      route: "/anne",
      image: anne,
      update: appService.update_member1,
      create: appService.create_member1,
      url: api_member1,
    },
    2: {
      member: "member2",
      name: "Mikkel",
      username: "mikkel",
      loggedInId: 2,
      route: "/mikkel",
      image: mikkel,
      update: appService.update_member2,
      create: appService.create_member2,
      url: api_member2,
    },
    3: {
      member: "member3",
      name: "Rebecca",
      username: "rebecca",
      loggedInId: 3,
      route: "/rebecca",
      image: rebecca,
      update: appService.update_member3,
      create: appService.create_member3,
      url: api_member3,
    },
    4: {
      member: "member4",
      name: "Valdemar",
      username: "valdemar",
      loggedInId: 4,
      route: "/valdemar",
      image: valdemar,
      update: appService.update_member4,
      create: appService.create_member4,
      url: api_member4,
    },
    5: {
      member: "allmembers",
      name: "Alle",
      username: "allmembers",
      loggedInId: 6,
      loggedInUser: "Alle",
      route: "/allmembers",
      image: family,
      update: appService.update_all_members,
      create: appService.create_all_members,
      url: api_all_members,
    },
  };

  // Convert the members object into an array
  return Object.values(membersObject);
};
