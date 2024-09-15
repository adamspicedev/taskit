import { Controller, Get } from '@nestjs/common';
import { TeamService, TeamWithUserNames } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamsService: TeamService) {}

  @Get()
  async getTeams(): Promise<TeamWithUserNames[]> {
    return this.teamsService.getTeams();
  }
}
