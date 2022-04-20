'use strict';

/**
 *  twitch controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::twitch.twitch');
