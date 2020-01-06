import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdashboardService {
  
  getTeamMembersSummary():any[]
  {

    var TeamMembersSummary = [
      {Region : "East", TeamMemberCount : 20, TemporarilyUnavailablemember : 4},
      {Region : "West", TeamMemberCount : 40, TemporarilyUnavailablemember : 8},
      {Region : "North", TeamMemberCount : 17, TemporarilyUnavailablemember : 1},
      {Region : "South", TeamMemberCount : 15, TemporarilyUnavailablemember : 6},
    ];
    return TeamMembersSummary;

  }

}
