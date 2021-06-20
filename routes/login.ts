import * as express from "express";
import { knex } from "../Database/AdminDb";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { is } from "sequelize/types/lib/operators";
const jwtSecret = "LHJHE12435544gffgg";

class Login {
  async totalOrganisations(req: any, res: any) {
    return res.json({
      instituicoesCadastradas: 848,
      instituicoesTransmissoras: 153,
    });
  }

  async trueLogin(req: any, res: any) {
    const dadosLogin = await req.body;

    const query1 = await knex
      .select()
      .table("users")
      .where({ email: dadosLogin.email });

    if (query1.length > 0) {
      const senhacorreta = bcrypt.compareSync(
        dadosLogin.password,
        query1[0].password
      );

      if (senhacorreta) {
        jwt.sign(
          { email: dadosLogin.email },
          jwtSecret,
          { expiresIn: "2h" },
          (err, token) => {
            if (err) {
              res.status(400);
              res.json({ error: "falha ao gerar Token" });
            }
            console.log("Login Aceito");
            res.status(200);

            res.json({ token: token });
          }
        );
      } else {
        console.log("Senha invalida");
        res.status(403);
        res.json({ error: "Senha Invalida" });
      }
    } else {
      console.log("Email invalido ou nao encontrado");
      res.status(400);
      res.json({ error: "Email Invalido" });

      //res.redirect('/')
    }
  }
}

export default new Login();
