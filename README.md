# Yakimenko Labs

Static site for [yakimenkolabs.com](https://yakimenkolabs.com) — a founder-led product lab and live-camera tech studio by **Kostiantyn Yakymenko** ([@ilusha_help](https://www.tiktok.com/@ilusha_help)).

Hosted on GitHub Pages. No build step.

## Design

Studio wall, not a SaaS template.

- **Palette:** espresso `#1C1610`, soot `#0F0C09`, print `#F2E8D6`, tungsten `#D4782A`, gel teal `#3A6E6A`, dust `#B6A48C`
- **Type:** Fraunces (display), Karla (body), IBM Plex Mono (kit data)
- **Signature:** the family still as a framed print with a tungsten practical wash
- **Motion:** CSS scroll-driven reveals where supported; IntersectionObserver fallback; `prefers-reduced-motion` respected

## Kit figures

From the public media kit (28-day window). Do not invent new numbers.

- Headline: ~9.4M followers · ~120M monthly viewers
- Facebook 59M / 28d · 1.8M
- TikTok 31.8M / 28d · 4.7M
- Instagram 24.5M / 28d · 786K
- YouTube 4.7M / 28d · 2.11M

Media kit: https://ilushahelp-oss.github.io/ilusha-help-media-kit/

## Apps (Play)

| App | Link |
| --- | --- |
| Talori | https://play.google.com/store/apps/details?id=com.callens.app |
| Soda AI | https://play.google.com/store/apps/details?id=ua.ilyusha.ai |
| NutriGen | https://play.google.com/store/apps/details?id=ua.valik.ai |
| Solo ZR | https://play.google.com/store/apps/developer?id=Yakimenko+Labs |

Never use `play.google.com/store/apps/dev?id=`.

## Local preview

```powershell
python -m http.server 8080
```

Open http://localhost:8080

`CNAME` must remain `yakimenkolabs.com`.

## Contact

- hello@yakimenkolabs.com
- ilushahelp@gmail.com
- Telegram: https://t.me/iluha_help
- Intake: https://ilushahelp-oss.github.io/ilusha-help-media-kit/discuss.html
