import Ember from 'ember';
import fetch from 'ember-network/fetch';
import { API_PATH, API_WEEKDAY_RAIDERS_PATH } from '../../../const';

export default Ember.Route.extend({

  model() {
    return fetch(`${API_PATH}${API_WEEKDAY_RAIDERS_PATH}`)
      .then((response) => { return response.json(); })
      .then((characters) => {
        characters.forEach((character) => {
          if (character.characterId) {
            character.characterId.thumbnail = `https://render-us.worldofwarcraft.com/character/${character.characterId.thumbnail}`
            character.characterId.thumbnailAlt = `https://us.battle.net/wow/static/images/2d/avatar/${character.characterId.race}-${character.characterId.gender}.jpg`
          }
        });
        return Promise.resolve(characters);
      });
  }
});
