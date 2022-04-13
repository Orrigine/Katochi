'use strict';

/**
 * user-table service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-table.user-table');
