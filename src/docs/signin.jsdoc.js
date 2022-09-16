/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Login
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
 *       '200':
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
 *         description: File or title is missing or passwords don't match.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: User not found.
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
 * /signin/new_token:
 *   post:
 *     summary: Refresh access token with refresh token in Authorization header
 *     tags:
 *       - Auth
 *     security:
 *       - TokenAuth: []
 *     responses:
 *       '200':
 *         description: A JSON object with new access token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - accessToken
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5...
 *       '401':
 *         description: Authorization header is missing or token is invalid.
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
