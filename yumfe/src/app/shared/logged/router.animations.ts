import { trigger, animate, style, group, animateChild, query, stagger, transition, keyframes, state } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    state('home', style({})),
    state('history', style({})),
    transition('*<=>*', [group([  // block executes in parallel
        query('.animateBlock', style({ opacity: 0 }), { optional: true }), 
        query(':enter .hideUntilEndOfAnimation', style({ opacity: 0 }), { optional: true }),
        // query(':leave .animate', [
        //     style({ opacity: 1 }),
        
        //     animate('0.5s ease-in-out', style({ opacity: 0 }))], { optional: true }),

    // ]),
    // transition('void => home', [

    // /* 1 */ query(':enter .animate, :leave .animate', style({ width: 'inherit', display: 'flex' }), { optional: true }),
    /* 2 */
    /* 3 */
    /* 5 */ query(':enter .animateBlock',
            stagger(100, [style({}),
            animate('300ms 0.0s', keyframes([
                style({ opacity: 0, transform: 'scale(0)', offset: 0 }),
                style({ opacity: 1, transform: 'scale(0.1)', offset: 0.3 }),
                style({ opacity: 1, transform: 'scale(1)', offset: 1.0 })
            ]))]), { optional: true }),

        // animate('2s ease-in-out',
        //     style({ transform: 'translateY(0px)' })),
        // query(':leave .animateBlock', 
        //  animate('300ms 0.0s', keyframes([
        //      style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        //      style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        //      style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        //    ]))  , { optional: true })
    ])
    ])
])

