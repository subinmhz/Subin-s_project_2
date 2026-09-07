import {
    n as e,
    r as t,
    t as n
} from "./index-CDFjNYd0.js";
var r = t(e()),
    i = `assets/photo.jpg`,
    a = n(),
    o = [{
        no: `01`,
        title: `Meridian — Design System`,
        desc: `A liquid component library for fintech, 240 tokens deep.`,
        tag: `Interface · 2024`
    }, {
        no: `02`,
        title: `Nocturne — Music App`,
        desc: `Ambient listening, wrapped in molten glass panels.`,
        tag: `Product · 2023`
    }, {
        no: `03`,
        title: `Aurora — Brand Motion`,
        desc: `Identity system with a slow, specular reveal.`,
        tag: `Identity · 2023`
    }],
    s = [{
        label: `01`,
        href: `#about`
    }, {
        label: `02`,
        href: `#work`
    }, {
        label: `03`,
        href: `#contact`
    }];

function c() {
    let e = (0, r.useRef)(null);
    return (0, r.useEffect)(() => {
        let t = e.current;
        if (!t) return;
        let n = Array.from(t.querySelectorAll(`.reveal`));
        if (!n.length) return;
        if (typeof IntersectionObserver > `u`) {
            n.forEach(e => e.classList.add(`is-visible`));
            return
        }
        let r = new IntersectionObserver(e => {
            for (let t of e) t.isIntersecting && (t.target.classList.add(`is-visible`), r.unobserve(t.target))
        }, {
            threshold: .15,
            rootMargin: `0px 0px -10% 0px`
        });
        return n.forEach(e => r.observe(e)), () => r.disconnect()
    }, []), e
}

function l() {
    let e = c();
    return (0, a.jsxs)(`div`, {
        ref: e,
        className: `relative min-h-screen bg-ink text-white font-body antialiased selection:bg-lumen/30 selection:text-white overflow-x-hidden`,
        "data-tsd-source": `/src/routes/index.tsx:97:5`,
        children: [(0, a.jsx)(`div`, {
            className: `pointer-events-none absolute inset-x-0 top-0 h-[420px] overflow-hidden`,
            "data-tsd-source": `/src/routes/index.tsx:102:7`,
            children: (0, a.jsx)(`div`, {
                className: `h-full w-[140%] -left-10 bg-[radial-gradient(60%_100%_at_50%_-10%,oklch(0.78_0.15_210/0.14),transparent_70%)]`,
                style: {
                    animation: `shimmer 9s var(--ease) infinite`
                },
                "data-tsd-source": `/src/routes/index.tsx:103:9`
            })
        }), (0, a.jsxs)(`nav`, {
            className: `fixed left-0 top-0 z-30 hidden md:flex h-screen w-20 flex-col items-center justify-between py-6 border-r border-line bg-ink/40 backdrop-blur-sm`,
            "data-tsd-source": `/src/routes/index.tsx:110:7`,
            children: [(0, a.jsx)(`div`, {
                className: `font-mono text-[11px] tracking-[0.2em] text-lumen`,
                "data-tsd-source": `/src/routes/index.tsx:111:9`,
                children: `SM`
            }), (0, a.jsx)(`div`, {
                className: `flex flex-col gap-5 font-mono text-[10px] tracking-[0.18em] text-muted`,
                "data-tsd-source": `/src/routes/index.tsx:112:9`,
                children: s.map(e => (0, a.jsx)(`a`, {
                    href: e.href,
                    className: `hover:text-lumen transition-colors duration-200`,
                    "data-tsd-source": `/src/routes/index.tsx:114:13`,
                    children: e.label
                }, e.href))
            }), (0, a.jsx)(`div`, {
                className: `h-16 w-px bg-gradient-to-b from-transparent via-lumen-soft/40 to-transparent`,
                "data-tsd-source": `/src/routes/index.tsx:123:9`
            })]
        }), (0, a.jsxs)(`header`, {
            className: `md:hidden sticky top-0 z-30 flex items-center justify-between border-b border-line bg-ink/70 px-6 py-4 backdrop-blur-md`,
            "data-tsd-source": `/src/routes/index.tsx:127:7`,
            children: [(0, a.jsx)(`span`, {
                className: `font-mono text-[11px] tracking-[0.2em] text-lumen`,
                "data-tsd-source": `/src/routes/index.tsx:128:9`,
                children: `SM`
            }), (0, a.jsx)(`nav`, {
                className: `flex gap-5 font-mono text-[10px] tracking-[0.18em] text-muted`,
                "data-tsd-source": `/src/routes/index.tsx:131:9`,
                children: s.map(e => (0, a.jsx)(`a`, {
                    href: e.href,
                    className: `hover:text-lumen transition-colors duration-200`,
                    "data-tsd-source": `/src/routes/index.tsx:133:13`,
                    children: e.label
                }, e.href))
            })]
        }), (0, a.jsxs)(`main`, {
            className: `relative md:pl-20 max-w-[1200px]`,
            "data-tsd-source": `/src/routes/index.tsx:144:7`,
            children: [(0, a.jsx)(`section`, {
                className: `relative px-6 md:px-14 pt-16 md:pt-24 pb-16`,
                "data-tsd-source": `/src/routes/index.tsx:146:9`,
                children: (0, a.jsxs)(`div`, {
                    className: `grid gap-10 md:grid-cols-12 items-center`,
                    "data-tsd-source": `/src/routes/index.tsx:147:11`,
                    children: [(0, a.jsxs)(`div`, {
                        className: `md:col-span-7 order-2 md:order-1 rise-in`,
                        style: {
                            animationDelay: `0ms`
                        },
                        "data-tsd-source": `/src/routes/index.tsx:148:13`,
                        children: [(0, a.jsxs)(`div`, {
                            className: `flex items-center gap-3 mb-8`,
                            style: {
                                fontFamily: `var(--font-mono)`
                            },
                            "data-tsd-source": `/src/routes/index.tsx:152:15`,
                            children: [(0, a.jsx)(`span`, {
                                className: `text-[10px] tracking-[0.25em] text-lumen`,
                                "data-tsd-source": `/src/routes/index.tsx:156:17`,
                                children: `PORTFOLIO / 2025`
                            }), (0, a.jsx)(`span`, {
                                className: `h-px flex-1 bg-line`,
                                "data-tsd-source": `/src/routes/index.tsx:159:17`
                            })]
                        }), (0, a.jsxs)(`h1`, {
                            className: `font-display text-balance leading-[0.92] tracking-tight text-[clamp(3.8rem,10vw,9rem)]`,
                            style: {
                                fontWeight: 800,
                                fontSize: `clamp(3.8rem, 10vw, 9rem)`
                            },
                            "data-tsd-source": `/src/routes/index.tsx:161:15`,
                            children: [`Subin`, (0, a.jsx)(`br`, {
                                "data-tsd-source": `/src/routes/index.tsx:166:17`
                            }), (0, a.jsx)(`span`, {
                                className: `text-transparent bg-clip-text bg-[linear-gradient(100deg,oklch(0.78_0.15_210),oklch(0.74_0.02_250))]`,
                                "data-tsd-source": `/src/routes/index.tsx:167:17`,
                                children: `Maharjan`
                            })]
                        }), (0, a.jsx)(`p`, {
                            className: `mt-8 max-w-[42ch] text-pretty text-lg text-muted leading-relaxed`,
                            "data-tsd-source": `/src/routes/index.tsx:171:15`,
                            children: `Design engineer crafting quiet, liquid interfaces — where type, motion, and light meet in the dark.`
                        }), (0, a.jsxs)(`div`, {
                            className: `mt-10 flex flex-wrap items-center gap-4`,
                            "data-tsd-source": `/src/routes/index.tsx:175:15`,
                            children: [(0, a.jsx)(`a`, {
                                href: `#work`,
                                className: `group relative rounded-full px-6 py-3 text-sm font-medium text-ink bg-lumen transition-colors duration-200 hover:bg-white`,
                                "data-tsd-source": `/src/routes/index.tsx:176:17`,
                                children: (0, a.jsx)(`span`, {
                                    className: `relative z-10`,
                                    "data-tsd-source": `/src/routes/index.tsx:180:19`,
                                    children: `View work`
                                })
                            }), (0, a.jsx)(`a`, {
                                href: `#contact`,
                                className: `rounded-full px-6 py-3 text-sm font-medium text-white border border-line hover:border-lumen-soft/50 transition-colors duration-200`,
                                "data-tsd-source": `/src/routes/index.tsx:182:17`,
                                children: `Get in touch`
                            })]
                        })]
                    }), (0, a.jsxs)(`div`, {
                        className: `md:col-span-5 order-1 md:order-2 relative rise-in`,
                        style: {
                            animationDelay: `120ms`
                        },
                        "data-tsd-source": `/src/routes/index.tsx:192:13`,
                        children: [(0, a.jsx)(`div`, {
                            className: `absolute -inset-3 rounded-[28px] bg-[radial-gradient(120%_120%_at_30%_0%,oklch(0.78_0.15_210/0.18),transparent_60%)]`,
                            style: {
                                animation: `drift 7s var(--ease) infinite`
                            },
                            "data-tsd-source": `/src/routes/index.tsx:196:15`
                        }), (0, a.jsxs)(`div`, {
                            className: `relative rounded-[22px] bg-glass outline-1 -outline-offset-1 outline-white/10 ring-1 ring-white/5 overflow-hidden`,
                            "data-tsd-source": `/src/routes/index.tsx:200:15`,
                            children: [(0, a.jsx)(`img`, {
                                src: i,
                                alt: `Portrait of Subin Maharjan, design engineer`,
                                width: 1024,
                                height: 1280,
                                className: `w-full aspect-[4/5] object-cover`,
                                fetchPriority: `high`,
                                "data-tsd-source": `/src/routes/index.tsx:201:17`
                            }), (0, a.jsx)(`div`, {
                                className: `pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-[linear-gradient(180deg,oklch(0.78_0.15_210/0.12),transparent)]`,
                                "data-tsd-source": `/src/routes/index.tsx:209:17`
                            })]
                        })]
                    })]
                })
            }), (0, a.jsx)(`section`, {
                id: `about`,
                className: `px-6 md:px-14 py-16 md:py-24 border-t border-line`,
                "data-tsd-source": `/src/routes/index.tsx:216:9`,
                children: (0, a.jsxs)(`div`, {
                    className: `grid gap-10 md:grid-cols-12`,
                    "data-tsd-source": `/src/routes/index.tsx:217:11`,
                    children: [(0, a.jsxs)(`div`, {
                        className: `md:col-span-4 reveal`,
                        style: {
                            fontFamily: `var(--font-mono)`
                        },
                        "data-tsd-source": `/src/routes/index.tsx:218:13`,
                        children: [(0, a.jsx)(`span`, {
                            className: `text-[10px] tracking-[0.25em] text-lumen`,
                            "data-tsd-source": `/src/routes/index.tsx:219:15`,
                            children: `(a)`
                        }), (0, a.jsx)(`p`, {
                            className: `mt-2 text-xs tracking-[0.15em] text-muted uppercase`,
                            "data-tsd-source": `/src/routes/index.tsx:220:15`,
                            children: `About`
                        })]
                    }), (0, a.jsxs)(`div`, {
                        className: `md:col-span-8 reveal`,
                        "data-tsd-source": `/src/routes/index.tsx:224:13`,
                        children: [(0, a.jsx)(`p`, {
                            className: `font-display text-pretty text-2xl md:text-3xl leading-snug tracking-tight text-white/90 max-w-[34ch]`,
                            style: {
                                fontWeight: 600
                            },
                            "data-tsd-source": `/src/routes/index.tsx:225:15`,
                            children: `I build interfaces that feel poured — smooth, deliberate, and a little liquid.`
                        }), (0, a.jsx)(`p`, {
                            className: `mt-6 max-w-[58ch] text-pretty text-muted leading-relaxed`,
                            "data-tsd-source": `/src/routes/index.tsx:232:15`,
                            children: `I care about the half-second between tap and response, the weight of a label, and the way light sits on a surface. Based in Kathmandu, working with product teams and independents across the world to ship interfaces that feel considered.`
                        }), (0, a.jsxs)(`div`, {
                            className: `mt-8 flex flex-wrap gap-10 font-mono text-sm text-muted`,
                            style: {
                                fontFamily: `var(--font-mono)`
                            },
                            "data-tsd-source": `/src/routes/index.tsx:238:15`,
                            children: [(0, a.jsxs)(`div`, {
                                "data-tsd-source": `/src/routes/index.tsx:242:17`,
                                children: [(0, a.jsx)(`div`, {
                                    className: `text-2xl text-white font-display`,
                                    style: {
                                        fontWeight: 700
                                    },
                                    "data-tsd-source": `/src/routes/index.tsx:243:19`,
                                    children: `1`
                                }), `Experience: 1 year`]
                            }), (0, a.jsxs)(`div`, {
                                "data-tsd-source": `/src/routes/index.tsx:251:17`,
                                children: [(0, a.jsx)(`div`, {
                                    className: `text-2xl text-white font-display`,
                                    style: {
                                        fontWeight: 700
                                    },
                                    "data-tsd-source": `/src/routes/index.tsx:252:19`,
                                    children: `1`
                                }), `Jobs: 1`]
                            }), (0, a.jsxs)(`div`, {
                                "data-tsd-source": `/src/routes/index.tsx:260:17`,
                                children: [(0, a.jsx)(`div`, {
                                    className: `text-2xl text-white font-display`,
                                    style: {
                                        fontWeight: 700
                                    },
                                    "data-tsd-source": `/src/routes/index.tsx:261:19`,
                                    children: `01`
                                }), `Achievement`]
                            }), (0, a.jsxs)(`div`, {
                                className: `mt-8 border-l border-lumen/40 pl-4`,
                                "data-tsd-source": `/src/routes/index.tsx:267:15`,
                                children: [(0, a.jsx)(`p`, {
                                    className: `text-xs uppercase tracking-[0.15em] text-lumen`,
                                    style: { fontFamily: `var(--font-mono)` },
                                    children: `Achievement`
                                }), (0, a.jsx)(`p`, {
                                    className: `mt-2 text-sm text-muted`,
                                    children: `Shipped a polished portfolio experience that brings design and engineering together.`
                                })]
                            })]
                        }), (0, a.jsxs)(`div`, {
                            className: `mt-10 border-t border-line pt-6`,
                            "data-tsd-source": `/src/routes/index.tsx:367:15`,
                            children: [(0, a.jsx)(`p`, {
                                className: `text-xs uppercase tracking-[0.15em] text-lumen`,
                                style: { fontFamily: `var(--font-mono)` },
                                children: `Customer Service`
                            }), (0, a.jsxs)(`div`, {
                                className: `mt-3 flex flex-col gap-2 text-sm text-muted`,
                                children: [(0, a.jsx)(`a`, {
                                    href: `mailto:subinmhz7@gmail.com`,
                                    className: `hover:text-lumen transition-colors duration-200`,
                                    children: `Email: subinmhz7@gmail.com`
                                }), (0, a.jsx)(`a`, {
                                    href: `tel:9875829349`,
                                    className: `hover:text-lumen transition-colors duration-200`,
                                    children: `Phone: 9875829349`
                                })]
                            })]
                        })]
                    })]
                })
            }), (0, a.jsxs)(`section`, {
                id: `work`,
                className: `px-6 md:px-14 py-16 md:py-24 border-t border-line`,
                "data-tsd-source": `/src/routes/index.tsx:275:9`,
                children: [(0, a.jsxs)(`div`, {
                    className: `flex items-end justify-between mb-10 reveal`,
                    style: {
                        fontFamily: `var(--font-mono)`
                    },
                    "data-tsd-source": `/src/routes/index.tsx:276:11`,
                    children: [(0, a.jsxs)(`div`, {
                        "data-tsd-source": `/src/routes/index.tsx:280:13`,
                        children: [(0, a.jsx)(`span`, {
                            className: `text-[10px] tracking-[0.25em] text-lumen`,
                            "data-tsd-source": `/src/routes/index.tsx:281:15`,
                            children: `(b)`
                        }), (0, a.jsx)(`h2`, {
                            className: `mt-2 font-display text-3xl md:text-4xl tracking-tight`,
                            style: {
                                fontWeight: 700
                            },
                            "data-tsd-source": `/src/routes/index.tsx:282:15`,
                            children: `Selected work`
                        })]
                    }), (0, a.jsx)(`span`, {
                        className: `text-xs tracking-[0.15em] text-muted`,
                        "data-tsd-source": `/src/routes/index.tsx:289:13`,
                        children: `01 — 03`
                    })]
                }), (0, a.jsx)(`div`, {
                    className: `flex flex-col`,
                    "data-tsd-source": `/src/routes/index.tsx:291:11`,
                    children: o.map((e, t) => (0, a.jsxs)(`a`, {
                        href: `#`,
                        className: `group reveal relative flex items-center gap-6 border-b border-line py-7 transition-colors duration-300 hover:bg-glass/40`,
                        style: {
                            transitionDelay: `${t*0}ms`
                        },
                        "data-tsd-source": `/src/routes/index.tsx:293:15`,
                        children: [(0, a.jsx)(`span`, {
                            className: `font-mono text-xs text-muted w-8`,
                            style: {
                                fontFamily: `var(--font-mono)`
                            },
                            "data-tsd-source": `/src/routes/index.tsx:299:17`,
                            children: e.no
                        }), (0, a.jsxs)(`div`, {
                            className: `flex-1`,
                            "data-tsd-source": `/src/routes/index.tsx:305:17`,
                            children: [(0, a.jsx)(`h3`, {
                                className: `font-display text-2xl md:text-3xl tracking-tight transition-transform duration-300 group-hover:translate-x-2`,
                                style: {
                                    fontWeight: 600
                                },
                                "data-tsd-source": `/src/routes/index.tsx:306:19`,
                                children: e.title
                            }), (0, a.jsx)(`p`, {
                                className: `mt-1 text-sm text-muted`,
                                "data-tsd-source": `/src/routes/index.tsx:312:19`,
                                children: e.desc
                            })]
                        }), (0, a.jsx)(`span`, {
                            className: `hidden sm:block text-xs text-muted uppercase tracking-[0.15em] group-hover:text-lumen transition-colors duration-200`,
                            "data-tsd-source": `/src/routes/index.tsx:314:17`,
                            children: e.tag
                        }), (0, a.jsx)(`span`, {
                            className: `text-lumen opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`,
                            "data-tsd-source": `/src/routes/index.tsx:317:17`,
                            children: `→`
                        })]
                    }, e.no))
                })]
            }), (0, a.jsxs)(`section`, {
                id: `contact`,
                className: `px-6 md:px-14 py-20 md:py-28 border-t border-line`,
                "data-tsd-source": `/src/routes/index.tsx:326:9`,
                children: [(0, a.jsxs)(`div`, {
                    className: `grid gap-10 md:grid-cols-12 items-center reveal`,
                    "data-tsd-source": `/src/routes/index.tsx:330:11`,
                    children: [(0, a.jsxs)(`div`, {
                        className: `md:col-span-7`,
                        "data-tsd-source": `/src/routes/index.tsx:331:13`,
                        children: [(0, a.jsx)(`span`, {
                            className: `font-mono text-[10px] tracking-[0.25em] text-lumen`,
                            style: {
                                fontFamily: `var(--font-mono)`
                            },
                            "data-tsd-source": `/src/routes/index.tsx:332:15`,
                            children: `(c)`
                        }), (0, a.jsxs)(`h2`, {
                            className: `mt-4 font-display text-balance text-4xl md:text-6xl tracking-tight leading-[0.95]`,
                            style: {
                                fontWeight: 700
                            },
                            "data-tsd-source": `/src/routes/index.tsx:338:15`,
                            children: [`Let's make something that`, ` `, (0, a.jsx)(`span`, {
                                className: `text-transparent bg-clip-text bg-[linear-gradient(100deg,oklch(0.78_0.15_210),oklch(0.74_0.02_250))]`,
                                "data-tsd-source": `/src/routes/index.tsx:343:17`,
                                children: `pours right.`
                            })]
                        }), (0, a.jsxs)(`div`, {
                            className: `mt-8 flex flex-wrap gap-6 font-mono text-sm text-muted`,
                            style: {
                                fontFamily: `var(--font-mono)`
                            },
                            "data-tsd-source": `/src/routes/index.tsx:347:15`,
                            children: [(0, a.jsx)(`a`, {
                                href: `mailto:hello@subin.studio`,
                                className: `hover:text-lumen transition-colors duration-200`,
                                "data-tsd-source": `/src/routes/index.tsx:351:17`,
                                children: `hello@subin.studio`
                            }), (0, a.jsx)(`a`, {
                                href: `#`,
                                className: `hover:text-lumen transition-colors duration-200`,
                                "data-tsd-source": `/src/routes/index.tsx:357:17`,
                                children: `LinkedIn`
                            }), (0, a.jsx)(`a`, {
                                href: `#`,
                                className: `hover:text-lumen transition-colors duration-200`,
                                "data-tsd-source": `/src/routes/index.tsx:363:17`,
                                children: `GitHub`
                            })]
                        })]
                    }), (0, a.jsx)(`div`, {
                        className: `md:col-span-5`,
                        "data-tsd-source": `/src/routes/index.tsx:371:13`,
                        children: (0, a.jsxs)(`a`, {
                            href: `mailto:hello@subin.studio`,
                            className: `group flex items-center justify-between rounded-2xl border border-line bg-glass/50 px-6 py-5 transition-colors duration-300 hover:border-lumen-soft/40`,
                            "data-tsd-source": `/src/routes/index.tsx:372:15`,
                            children: [(0, a.jsx)(`span`, {
                                className: `font-medium text-white`,
                                "data-tsd-source": `/src/routes/index.tsx:376:17`,
                                children: `Start a project`
                            }), (0, a.jsx)(`span`, {
                                className: `text-lumen transition-transform duration-300 group-hover:translate-x-1`,
                                "data-tsd-source": `/src/routes/index.tsx:377:17`,
                                children: `→`
                            })]
                        })
                    })]
                }), (0, a.jsxs)(`footer`, {
                    className: `mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-line pt-8 font-mono text-[11px] tracking-[0.15em] text-muted`,
                    style: {
                        fontFamily: `var(--font-mono)`
                    },
                    "data-tsd-source": `/src/routes/index.tsx:383:11`,
                    children: [(0, a.jsx)(`span`, {
                        "data-tsd-source": `/src/routes/index.tsx:387:13`,
                        children: `© 2025 Subin Maharjan — Kathmandu / Remote`
                    }), (0, a.jsx)(`span`, {
                        "data-tsd-source": `/src/routes/index.tsx:388:13`,
                        children: `Poured with care · No. 03`
                    })]
                })]
            })]
        })]
    })
}
export {
    l as component
};