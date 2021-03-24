import * as express from 'express'
const router = express.Router()

import createacc from "./createAcoount"

router.post('/', createacc)

