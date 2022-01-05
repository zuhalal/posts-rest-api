import { Router } from 'express'
import postsRoute from './posts.js'
import homeRoute from './index.js'

const router = Router()

router.use('/', homeRoute)
router.use('/posts', postsRoute)

export default router