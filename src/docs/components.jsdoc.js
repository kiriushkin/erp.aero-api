/**
 * @swagger
 * components:
 *   schemas:
 *     File:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - ext
 *         - mimetype
 *         - size
 *         - uploadDate
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: file
 *         ext:
 *           type: string
 *           example: txt
 *         mimetype:
 *           type: string
 *           example: text/plain
 *         size:
 *           type: string
 *           example: 123123
 *         uploadDate:
 *           type: date
 *           example: 2022-09-16 17:30:09
 *     Error:
 *       type: object
 *       required:
 *         - message
 *       properties:
 *         message:
 *           type: string
 *           example: An error occured while...
 *   securitySchemes:
 *     TokenAuth:
 *       type: http
 *       scheme: bearer
 */
