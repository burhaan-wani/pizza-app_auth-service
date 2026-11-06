import type { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
    const params = req.params;

    res.json({
        params,
    });
};
