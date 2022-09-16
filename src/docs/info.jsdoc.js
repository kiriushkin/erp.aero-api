/**
 * @swagger
 * /info:
 *   get:
 *     summary: Return user id
 *     tags:
 *       - Info
 *     security:
 *       - TokenAuth: []
 *     responses:
 *       '200':
 *         description: User id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: foo@bar.com
 *       default:
 *         description: Unexpected error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
