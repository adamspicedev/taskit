import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

export type TeamWithUserNames = {
  id: number;
  teamName: string;
  productOwnerUserId: number | null;
  projectManagerUserId: number | null;
}[];

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  async getTeams(): Promise<TeamWithUserNames[]> {
    const teams = await this.prisma.team.findMany();

    const teamsWithUsernames = await Promise.all(
      teams.map(async (team: any) => {
        const productOwner = await this.prisma.user.findUnique({
          where: { userId: team.productOwnerUserId! },
          select: { username: true },
        });

        const projectManager = await this.prisma.user.findUnique({
          where: { userId: team.projectManagerUserId! },
          select: { username: true },
        });

        return {
          ...team,
          productOwnerUsername: productOwner?.username,
          projectManagerUsername: projectManager?.username,
        };
      }),
    );

    return teamsWithUsernames;
  }
}
