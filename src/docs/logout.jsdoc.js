/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logout user and invalidate the token
 *     tags:
 *       - Logout
 *     security:
 *       - TokenAuth: []
 *     responses:
 *       '200':
 *         description: Success message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Successfully logged out
 *       default:
 *         description: Unexpected error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
