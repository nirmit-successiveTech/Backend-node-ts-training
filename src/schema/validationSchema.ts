import joi, { ObjectSchema } from "joi"

export const validationSchema:Record<string,ObjectSchema>={
    '/user/register':joi.object({
        name:joi.string().min(3).max(15).required(),
        password:joi.string().min(6).required()
    }),

    '/user/login':joi.object({
        name:joi.string().min(3).max(15).required(),
        password:joi.string().min(6).required()
    })
}