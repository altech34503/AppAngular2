export interface Member {
  memberId: number; // Maps to member_id in the database
  memberEmail: string; // Maps to member_email in the database
  memberType: 'Investor' | 'Startup'; // Maps to member_type in the database
  memberAddress: string; // Maps to member_address in the database
  memberPhone: string; // Maps to member_phone in the database
}
