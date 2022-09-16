/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Registrate new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Id and password fields, where id either email or phone number
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - password
 *             properties:
 *               id:
 *                 type: string
 *                 example: foo@bar.com
 *               password:
 *                 type: string
 *                 example: foo
 *     responses:
 *       '201':
 *         description: A JSON object with access and refresh tokens.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - accessToken
 *                 - refreshToken
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5...
 *                 refreshToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5...
 *       '400':
 *         description: File or title is missing or user is existing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       default:
 *         description: Unexpected error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
