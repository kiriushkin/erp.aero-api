/**
 * @swagger
 * /file/list:
 *   get:
 *     summary: Return files list
 *     tags:
 *       - File
 *     security:
 *       - TokenAuth: []
 *     parameters:
 *       - in: query
 *         name: list_size
 *         schema:
 *           type: integer
 *         description: The number of files per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The number of the page
 *     responses:
 *       '200':
 *         description: A files list.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/File'
 *       default:
 *         description: Unexpected error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * /file/{id}:
 *   get:
 *     summary: Return file info
 *     tags:
 *       - File
 *     security:
 *       - TokenAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: File id
 *         required: true
 *     responses:
 *       '200':
 *         description: File info.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       '400':
 *         description: File id is missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: File does not exist.
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
 * /file/download/{id}:
 *   get:
 *     summary: Download the file
 *     tags:
 *       - File
 *     security:
 *       - TokenAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: File id
 *         required: true
 *     responses:
 *       '200':
 *         description: File.
 *         content:
 *           application/json:
 *             schema:
 *               type: file
 *       '400':
 *         description: File id is missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: File does not exist.
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
 * /file/upload:
 *   post:
 *     summary: Upload a file
 *     tags:
 *       - File
 *     security:
 *       - TokenAuth: []
 *     requestBody:
 *       description: Form data with file
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: file
 *                 format: binary
 *     responses:
 *       '201':
 *         description: A JSON object with file data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       '400':
 *         description: File is missing.
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
 * /file/update/{id}:
 *   put:
 *     summary: Update the file
 *     tags:
 *       - File
 *     security:
 *       - TokenAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: File id
 *         required: true
 *     requestBody:
 *       description: Form data with new file
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: file
 *                 format: binary
 *     responses:
 *       '200':
 *         description: A JSON object with file data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       '400':
 *         description: File or id is missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: File does not exist.
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
 * /file/delete/{id}:
 *   delete:
 *     summary: Delete the file
 *     tags:
 *       - File
 *     security:
 *       - TokenAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: File id
 *         required: true
 *     responses:
 *       '200':
 *         description: A JSON object with successful message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: File deleted.
 *       '400':
 *         description: Id is missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: File does not exist.
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
