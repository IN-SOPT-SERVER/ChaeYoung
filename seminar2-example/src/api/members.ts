import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const members = [
    {
      name: "임채영",
      age: 21,
      home: "이대역",
      favfood: "초밥",
    },

    {
      name: "백혜윤",
      age: 23,
      home: "광교중앙역",
      favfood: "파스타",
    },
  ];
  return res.status(200).json(members);
});

module.exports = router;
