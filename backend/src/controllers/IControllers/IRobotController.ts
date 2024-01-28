import { Request, Response, NextFunction } from "express";

export default interface IRobotController {
    createRobot(req: Request, res: Response, next: NextFunction);
    getRobots(req: Request, res: Response, next: NextFunction);
    inibRobot(req: Request, res: Response, next: NextFunction);
}