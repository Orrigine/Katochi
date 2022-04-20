'use strict';

/**
 * twitch service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::twitch.twitch');
