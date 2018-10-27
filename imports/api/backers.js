import { Mongo } from 'meteor/mongo';
 
export const Backers = new Mongo.Collection('backers');
export const BackerTiers = new Mongo.Collection('backerTiers');