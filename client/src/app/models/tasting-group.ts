import { Member } from "./member";

export interface TastingGroup {
  GroupId: number;
  GroupName: string;
  OrganizationName: string;
  SponsorName: string;
  SponsorEmail: string;
  SponsorPhone: string;
  MaxGroupSize: number;
  Members: Array<Member>;
}
