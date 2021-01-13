import { Request, Response } from "express";
import { Redis } from "ioredis";
import { createUserLoader } from "./utils/createUserLoader";

export type MyContext = {
  req: Request;
  res: Response;
  redis: Redis;
  userLoader: ReturnType<typeof createUserLoader>;
};
