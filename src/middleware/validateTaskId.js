import { param } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTaskId = [
    param('id')
        .exists()
        .withMessage('id is required')
        .bail()
        .isInt({ min: 1 })
        .withMessage('id must be a positive integer')
        .toInt(),

    checkValidationResults
]