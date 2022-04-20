'use strict';

/**
 * twitch router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::twitch.twitch');
