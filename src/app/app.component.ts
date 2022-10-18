import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challengeAngular';
  showFiller = false;
  menuList = [
    {
        name: 'newUser',
        url: '/user/add',
        icon: 'account_circle',
        active: false,
    },
    {
        name: 'listUser',
        url: '/user/list',
        icon: 'supervisor_account',
        active: false,
    },

    {
        name: 'gridsValidation',
        url: '/grids/list',
        icon: 'view_kanban',
        active: false,
    },
    {
        name: 'reports',
        url: '/report/list',
        icon: 'poll',
        active: false,
    },
    {
        name: 'arrays',
        url: '/arrays/list',
        icon: 'window',
        active: false,
    },
    {
        name: 'program',
        url: '/program/list',
        icon: 'terminal',
        active: false,
    },
    {
        name: 'uploadArrays',
        url: '/program/upload',
        icon: 'upload',
        active: false,
    },
    {
        name: 'downloadArrays',
        url: '/arrays/download',
        icon: 'view_kanban',
        active: false,
    },
    {
        name: 'history',
        url: '/advance/list',
        icon: 'push_pin',
        active: false,
        notification: true,
    },
    {
        name: 'logout',
        url: '/logout',
        icon: 'radio_button_checked',
        active: false,
    },
];
}
