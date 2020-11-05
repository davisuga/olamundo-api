import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const find_all = async (req: any, res: any) => {
    const result = await prisma.lesson.findMany();
    res.json(result);
};
const find_one = async (req: any, res: any) => {
    try {
        const result = await prisma.lesson.findOne({
            where: { id: parseInt(req.params.id) },
        });
        res.json(result);
    } catch (error) {
        res.status(400);
        res.json({ error });
    }
};
const create_one = async (req: any, res: any) => {
    try {
        const result = await prisma.lesson.create({
            data: req.body,
        });
        res.json(result);
    } catch (error) {
        res.status(400);
        res.json({ error });
    }
};
const delete_one = async (req: any, res: any) => {
    try {
        const result = await prisma.lesson.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.json(result);
    } catch (error) {
        res.status(400);
        res.json({ error });
    }
};
const update_one = async (req: any, res: any) => {
    try {
        const result = await prisma.lesson.update({
            where: { id: parseInt(req.params.id) },
            data: req.body,
        });
        res.json(result);
    } catch (error) {
        res.status(400);
        res.json({ error });
    }
};

const routes = Router();
routes.get("/", find_all);
routes.get("/:id", find_one);
routes.post("/", create_one);
routes.delete("/:id", delete_one);
routes.put("/:id", update_one);

export default routes;
