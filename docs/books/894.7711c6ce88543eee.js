'use strict';
(self.webpackChunkbooks = self.webpackChunkbooks || []).push([
  [894],
  {
    4675: (oa, f, l) => {
      l.r(f), l.d(f, { CartModule: () => ia });
      var g = l(6814),
        d = l(2566),
        h = l(5144),
        S = l(6140),
        t = l(5879),
        b = l(8937),
        n = (function (a) {
          return (
            (a.ArmenianDram = 'AMD'),
            (a.AustralianDollar = 'AUD'),
            (a.AzerbaijaniManat = 'AZN'),
            (a.Baht = 'THB'),
            (a.BelarusianRuble = 'BYN'),
            (a.BrazilianReal = 'BRL'),
            (a.CanadianDollar = 'CAD'),
            (a.Dirham = 'AED'),
            (a.Dollar = 'USD'),
            (a.Euro = 'EUR'),
            (a.GeorgianLari = 'GEL'),
            (a.HongKongDollar = 'HKD'),
            (a.Hryvnia = 'UAH'),
            (a.IndianRupee = 'INR'),
            (a.IndonesianRupiah = 'IDR'),
            (a.IranianRial = 'IRR'),
            (a.IsraeliShekel = 'ILS'),
            (a.KyrgyzstanSom = 'KGS'),
            (a.MalaysianRinggit = 'MYR'),
            (a.MexicanPeso = 'MXN'),
            (a.MongolianTugrik = 'MNT'),
            (a.NewTurkmenManat = 'TMT'),
            (a.Pound = 'GBP'),
            (a.Ruble = 'RUB'),
            (a.SaudiRiyal = 'SAR'),
            (a.SerbianDinar = 'RSD'),
            (a.SingaporeDollar = 'SGD'),
            (a.SouthAfricanRand = 'ZAR'),
            (a.SriLankanRupee = 'LKR'),
            (a.SwissFranc = 'CHF'),
            (a.TajikistaniSomoni = 'TJS'),
            (a.Tenge = 'KZT'),
            (a.TurkishLira = 'TRY'),
            (a.UzbekSum = 'UZS'),
            (a.VietnameseDong = 'VND'),
            (a.Won = 'KRW'),
            (a.Yen = 'JPY'),
            (a.YuanRenminbi = 'CNY'),
            a
          );
        })(n || {}),
        e = (function (a) {
          return (
            (a.ArmenianDram = '051'),
            (a.AustralianDollar = '036'),
            (a.AzerbaijaniManat = '944'),
            (a.Baht = '764'),
            (a.BelarusianRuble = '933'),
            (a.BrazilianReal = '986'),
            (a.CanadianDollar = '124'),
            (a.Dirham = '784'),
            (a.Dollar = '840'),
            (a.Euro = '978'),
            (a.GeorgianLari = '981'),
            (a.HongKongDollar = '344'),
            (a.Hryvnia = '980'),
            (a.IndianRupee = '356'),
            (a.IndonesianRupiah = '360'),
            (a.IranianRial = '364'),
            (a.IsraeliShekel = '376'),
            (a.KyrgyzstanSom = '417'),
            (a.MalaysianRinggit = '458'),
            (a.MexicanPeso = '484'),
            (a.MongolianTugrik = '496'),
            (a.NewTurkmenManat = '934'),
            (a.Pound = '826'),
            (a.Ruble = '643'),
            (a.SaudiRiyal = '682'),
            (a.SerbianDinar = '941'),
            (a.SingaporeDollar = '702'),
            (a.SouthAfricanRand = '710'),
            (a.SriLankanRupee = '144'),
            (a.SwissFranc = '756'),
            (a.TajikistaniSomoni = '972'),
            (a.Tenge = '398'),
            (a.TurkishLira = '949'),
            (a.UzbekSum = '860'),
            (a.VietnameseDong = '704'),
            (a.Won = '410'),
            (a.Yen = '392'),
            (a.YuanRenminbi = '156'),
            a
          );
        })(e || {});
      let N = (() => {
          class a {
            transform(r) {
              return (function I(a) {
                const i = (function M(a) {
                  return null === a || (0, b.Aj)(a)
                    ? a || ''
                    : String(a).padStart(3, '0');
                })(a);
                return (
                  (function v(a) {
                    switch (a) {
                      case n.Ruble:
                      case e.Ruble:
                        return '\u20bd';
                      case n.Dollar:
                      case e.Dollar:
                      case n.MexicanPeso:
                      case e.MexicanPeso:
                        return '$';
                      case n.SingaporeDollar:
                      case e.SingaporeDollar:
                        return 'S$';
                      case n.AustralianDollar:
                      case e.AustralianDollar:
                        return 'A$';
                      case n.HongKongDollar:
                      case e.HongKongDollar:
                        return 'HK$';
                      case n.CanadianDollar:
                      case e.CanadianDollar:
                        return 'C$';
                      case n.Euro:
                      case e.Euro:
                        return '\u20ac';
                      case n.Pound:
                      case e.Pound:
                        return '\xa3';
                      case n.Baht:
                      case e.Baht:
                        return '\u0e3f';
                      case n.TurkishLira:
                      case e.TurkishLira:
                        return '\u20ba';
                      case n.YuanRenminbi:
                      case e.YuanRenminbi:
                        return 'CN\xa5';
                      case n.Yen:
                      case e.Yen:
                        return '\xa5';
                      case n.IsraeliShekel:
                      case e.IsraeliShekel:
                        return '\u20aa';
                      case n.IndianRupee:
                      case e.IndianRupee:
                        return '\u20b9';
                      case n.SwissFranc:
                      case e.SwissFranc:
                        return '\u20a3';
                      case n.ArmenianDram:
                      case e.ArmenianDram:
                        return '\u058f';
                      case n.Won:
                      case e.Won:
                        return '\u20a9';
                      case n.Tenge:
                      case e.Tenge:
                        return '\u20b8';
                      case n.Hryvnia:
                      case e.Hryvnia:
                        return '\u20b4';
                      case n.UzbekSum:
                      case e.UzbekSum:
                        return "So'm";
                      case n.KyrgyzstanSom:
                      case e.KyrgyzstanSom:
                        return 'c';
                      case n.Dirham:
                      case e.Dirham:
                        return 'Dh';
                      case n.TajikistaniSomoni:
                      case e.TajikistaniSomoni:
                        return 'SM';
                      case n.MalaysianRinggit:
                      case e.MalaysianRinggit:
                        return 'RM';
                      case n.BelarusianRuble:
                      case e.BelarusianRuble:
                        return 'Br';
                      case n.GeorgianLari:
                      case e.GeorgianLari:
                        return '\u20be';
                      case n.AzerbaijaniManat:
                      case e.AzerbaijaniManat:
                        return '\u20bc';
                      case n.SriLankanRupee:
                      case e.SriLankanRupee:
                        return 'Rs.';
                      case n.SerbianDinar:
                      case e.SerbianDinar:
                        return 'DIN';
                      case n.SaudiRiyal:
                      case e.SaudiRiyal:
                        return 'SR';
                      case n.MongolianTugrik:
                      case e.MongolianTugrik:
                        return '\u20ae';
                      case n.SouthAfricanRand:
                      case e.SouthAfricanRand:
                        return 'R';
                      case n.IranianRial:
                      case e.IranianRial:
                        return 'IR';
                      case n.IndonesianRupiah:
                      case e.IndonesianRupiah:
                        return 'Rp';
                      case n.VietnameseDong:
                      case e.VietnameseDong:
                        return '\u0111';
                      case n.NewTurkmenManat:
                      case e.NewTurkmenManat:
                        return 'TMT';
                      case n.BrazilianReal:
                      case e.BrazilianReal:
                        return 'R$';
                      default:
                        return null;
                    }
                  })(i) || i
                );
              })(r);
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵpipe = t.Yjl({ name: 'tuiCurrency', type: a, pure: !0 })),
            a
          );
        })(),
        P = (() => {
          class a {}
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵmod = t.oAB({ type: a })),
            (a.ɵinj = t.cJS({})),
            a
          );
        })();
      var _ = l(5710),
        Y = l(5619),
        B = l(2572),
        F = l(9397),
        Z = l(7398),
        L = l(3781),
        U = l(3414),
        z = l(1818);
      function E(a, i) {
        1 & a && (t.TgZ(0, 'th', 9), t._uU(1, '#'), t.qZA()),
          2 & a && t.Q6J('sorter', null);
      }
      function y(a, i) {
        1 & a &&
          (t.TgZ(0, 'th', 10),
          t._uU(1, '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435'),
          t.qZA());
      }
      function j(a, i) {
        1 & a &&
          (t.TgZ(0, 'th', 9),
          t._uU(
            1,
            '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e'
          ),
          t.qZA()),
          2 & a && t.Q6J('sorter', null);
      }
      function H(a, i) {
        1 & a &&
          (t.TgZ(0, 'th', 10), t._uU(1, '\u0426\u0435\u043d\u0430'), t.qZA());
      }
      function J(a, i) {
        1 & a &&
          (t.TgZ(0, 'th', 9),
          t._uU(1, '\u041a\u043e\u0440\u0437\u0438\u043d\u0430'),
          t.qZA()),
          2 & a && t.Q6J('sorter', null);
      }
      function $(a, i) {
        if ((1 & a && (t.TgZ(0, 'td', 18), t._uU(1), t.qZA()), 2 & a)) {
          const r = t.oxw().index;
          t.xp6(1), t.hij(' ', r + 1, ' ');
        }
      }
      function K(a, i) {
        if (
          (1 & a &&
            (t.TgZ(0, 'td', 18), t._UZ(1, 'img', 19), t._uU(2), t.qZA()),
          2 & a)
        ) {
          const r = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J('src', r.image, t.LSH)('alt', r.title),
            t.xp6(1),
            t.hij(' ', r.title, ' ');
        }
      }
      function C(a, i) {
        if ((1 & a && (t.TgZ(0, 'td', 18), t._uU(1), t.qZA()), 2 & a)) {
          const r = t.oxw().$implicit;
          t.xp6(1),
            t.Oqu(
              r.subtitle ||
                '\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445'
            );
        }
      }
      function G(a, i) {
        if ((1 & a && (t.TgZ(0, 'td', 18), t._uU(1), t.qZA()), 2 & a)) {
          const r = t.oxw().$implicit;
          t.xp6(1), t.Oqu(r.price);
        }
      }
      function Q(a, i) {
        if (
          (1 & a &&
            (t.TgZ(0, 'td', 20),
            t.NdJ('click', function (o) {
              return o.stopPropagation();
            }),
            t._UZ(1, 'cart-button', 21),
            t.qZA()),
          2 & a)
        ) {
          const r = t.oxw().$implicit;
          t.xp6(1), t.Q6J('book', r);
        }
      }
      function O(a, i) {
        if (1 & a) {
          const r = t.EpF();
          t.TgZ(0, 'tr', 15),
            t.NdJ('click', function () {
              const s = t.CHM(r).$implicit,
                c = t.oxw(4);
              return t.KtG(c.toDetailPage(s.isbn13));
            }),
            t.YNc(1, $, 2, 1, 'td', 16),
            t.YNc(2, K, 3, 3, 'td', 16),
            t.YNc(3, C, 2, 1, 'td', 16),
            t.YNc(4, G, 2, 1, 'td', 16),
            t.YNc(5, Q, 2, 1, 'td', 17),
            t.qZA();
        }
        2 & a &&
          (t.xp6(1),
          t.Q6J('tuiCell', 'number'),
          t.xp6(1),
          t.Q6J('tuiCell', 'title'),
          t.xp6(1),
          t.Q6J('tuiCell', 'subtitle'),
          t.xp6(1),
          t.Q6J('tuiCell', 'price'),
          t.xp6(1),
          t.Q6J('tuiCell', 'cart'));
      }
      function w(a, i) {
        if (
          (1 & a &&
            (t.TgZ(0, 'td', 22),
            t._uU(1),
            t.ALo(2, 'tuiCurrency'),
            t.ALo(3, 'async'),
            t.qZA()),
          2 & a)
        ) {
          const r = t.oxw(4);
          t.xp6(1),
            t.AsE(
              ' \u0421\u0443\u043c\u043c\u0430: ',
              t.lcZ(2, 2, 'USD'),
              '',
              t.lcZ(3, 4, r.totalSum$),
              ' '
            );
        }
      }
      function W(a, i) {
        if (
          (1 & a &&
            (t.TgZ(0, 'tbody', 11),
            t.YNc(1, O, 6, 5, 'tr', 12),
            t.TgZ(2, 'tr', 13),
            t.YNc(3, w, 4, 6, 'td', 14),
            t.qZA()()),
          2 & a)
        ) {
          const r = i.tuiLet;
          t.Q6J('data', r),
            t.xp6(1),
            t.Q6J('ngForOf', r),
            t.xp6(2),
            t.Q6J('tuiCell', 'price');
        }
      }
      function V(a, i) {
        if (
          (1 & a &&
            (t.TgZ(0, 'table', 4)(1, 'thead')(2, 'tr', 5),
            t.YNc(3, E, 2, 1, 'th', 6),
            t.YNc(4, y, 2, 0, 'th', 7),
            t.YNc(5, j, 2, 1, 'th', 6),
            t.YNc(6, H, 2, 0, 'th', 7),
            t.YNc(7, J, 2, 1, 'th', 6),
            t.qZA()(),
            t.YNc(8, W, 4, 3, 'tbody', 8),
            t.ALo(9, 'tuiTableSort'),
            t.qZA()),
          2 & a)
        ) {
          const r = t.oxw().ngIf,
            o = t.oxw();
          t.Q6J('columns', o.columns),
            t.xp6(3),
            t.Q6J('tuiHead', 'number'),
            t.xp6(1),
            t.Q6J('tuiHead', 'title'),
            t.xp6(1),
            t.Q6J('tuiHead', 'subtitle'),
            t.xp6(1),
            t.Q6J('tuiHead', 'price'),
            t.xp6(1),
            t.Q6J('tuiHead', 'cart'),
            t.xp6(1),
            t.Q6J('tuiLet', t.lcZ(9, 7, r));
        }
      }
      function X(a, i) {
        if (
          (1 & a &&
            (t.TgZ(0, 'div', 2), t.YNc(1, V, 10, 9, 'table', 3), t.qZA()),
          2 & a)
        ) {
          const r = i.ngIf;
          t.oxw();
          const o = t.MAs(3);
          t.xp6(1), t.Q6J('ngIf', r.length > 0)('ngIfElse', o);
        }
      }
      function q(a, i) {
        1 & a &&
          (t.TgZ(0, 'div'),
          t._uU(
            1,
            '\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430'
          ),
          t.qZA());
      }
      const aa = [
        {
          path: '',
          component: (() => {
            class a {
              constructor(r, o, u) {
                (this.booksDataService = r),
                  (this.cartService = o),
                  (this.router = u),
                  (this.columns = [
                    'number',
                    'title',
                    'subtitle',
                    'price',
                    'cart',
                  ]),
                  (this.totalSum$ = new Y.X(0)),
                  (this.booksInCart$ = (0, B.a)(
                    this.cartService.booksInCart$,
                    this.booksDataService.allBooks$
                  ).pipe(
                    (0, Z.U)(([s, c]) => {
                      const m = Object.keys(s);
                      return c.filter(
                        (p) => (
                          (p.counterBooks = s[p.isbn13]), m.includes(p.isbn13)
                        )
                      );
                    }),
                    (0, F.b)((s) => {
                      let c = 0;
                      s.forEach((m) => {
                        const p = parseFloat(m.price.replace('$', ''));
                        c += p * (m.counterBooks || 0);
                      }),
                        (c = parseFloat(c.toFixed(2))),
                        this.totalSum$.next(c);
                    })
                  ));
              }
              ngOnInit() {
                this.cartService.getBooksInCart().subscribe();
              }
              toDetailPage(r) {
                r && this.router.navigate(['main', r]);
              }
              static #a = (this.ɵfac = function (o) {
                return new (o || a)(t.Y36(L.s), t.Y36(U.N), t.Y36(_.F0));
              });
              static #t = (this.ɵcmp = t.Xpm({
                type: a,
                selectors: [['app-cart']],
                decls: 4,
                vars: 3,
                consts: [
                  ['class', 'cart', 4, 'ngIf'],
                  ['emptyCart', ''],
                  [1, 'cart'],
                  [
                    'class',
                    'books-table',
                    'tuiTable',
                    '',
                    3,
                    'columns',
                    4,
                    'ngIf',
                    'ngIfElse',
                  ],
                  ['tuiTable', '', 1, 'books-table', 3, 'columns'],
                  ['tuiThGroup', ''],
                  ['tuiTh', '', 3, 'sorter', 4, 'tuiHead'],
                  ['tuiTh', '', 4, 'tuiHead'],
                  ['tuiTbody', '', 3, 'data', 4, 'tuiLet'],
                  ['tuiTh', '', 3, 'sorter'],
                  ['tuiTh', ''],
                  ['tuiTbody', '', 3, 'data'],
                  [
                    'tuiTr',
                    '',
                    'class',
                    'cart-book-row',
                    3,
                    'click',
                    4,
                    'ngFor',
                    'ngForOf',
                  ],
                  ['tuiTr', '', 1, 'total-price'],
                  ['colspan', '5', 'tuiTd', '', 4, 'tuiCell'],
                  ['tuiTr', '', 1, 'cart-book-row', 3, 'click'],
                  ['tuiTd', '', 4, 'tuiCell'],
                  ['tuiTd', '', 3, 'click', 4, 'tuiCell'],
                  ['tuiTd', ''],
                  ['width', '30px', 3, 'src', 'alt'],
                  ['tuiTd', '', 3, 'click'],
                  [3, 'book'],
                  ['colspan', '5', 'tuiTd', ''],
                ],
                template: function (o, u) {
                  1 & o &&
                    (t.YNc(0, X, 2, 2, 'div', 0),
                    t.ALo(1, 'async'),
                    t.YNc(2, q, 2, 0, 'ng-template', null, 1, t.W1O)),
                    2 & o && t.Q6J('ngIf', t.lcZ(1, 1, u.booksInCart$));
                },
                dependencies: [
                  g.sg,
                  g.O5,
                  d.c4,
                  d.jY,
                  d.EE,
                  d.Ws,
                  d.Kt,
                  d.fu,
                  d.Bl,
                  d.DZ,
                  h.Ls,
                  z.d,
                  g.Ov,
                  d.yS,
                  N,
                ],
                styles: [
                  '.cart[_ngcontent-%COMP%]{margin:0 auto;display:flex;align-items:center;justify-content:center;flex-direction:column;max-width:90rem;padding:1.5rem}.cart-book-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:#faeee5;cursor:pointer}',
                ],
                changeDetection: 0,
              }));
            }
            return a;
          })(),
        },
      ];
      let ta = (() => {
        class a {
          static #a = (this.ɵfac = function (o) {
            return new (o || a)();
          });
          static #t = (this.ɵmod = t.oAB({ type: a }));
          static #n = (this.ɵinj = t.cJS({
            imports: [_.Bz.forChild(aa), _.Bz],
          }));
        }
        return a;
      })();
      var na = l(9496),
        ea = l(5271);
      let ia = (() => {
        class a {
          static #a = (this.ɵfac = function (o) {
            return new (o || a)();
          });
          static #t = (this.ɵmod = t.oAB({ type: a }));
          static #n = (this.ɵinj = t.cJS({
            imports: [g.ez, ta, na.BookListModule, d.jz, h.WD, S.fN, P, ea.n],
          }));
        }
        return a;
      })();
    },
  },
]);
