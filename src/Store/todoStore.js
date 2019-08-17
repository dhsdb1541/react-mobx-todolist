import { observable, action } from 'mobx';

export default class todoStore {
  @observable input = '';
  @observable todos = [];

  @observable todoStoreInformation = [{ id: 0, text: '리액트 소', checked: false }, { id: 1, text: '리액트 소개', checked: true }, { id: 2, text: '리액트 소개', checked: false }];
}
