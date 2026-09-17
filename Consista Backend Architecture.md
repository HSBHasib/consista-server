# File Tree: Consista Server File Architecture

```
└──📁 backend
    ├──📁config
    ├──📁 prisma
    │   ├──📁 migrations
    │   │   ├── 20260908112448_consista
    │   │   │   └── migration.sql
    │   │   ├── 20260911041716_add_jwks_table
    │   │   │   └── migration.sql
    │   │   ├── 20260911041849_update_jwks_columns
    │   │   │   └── migration.sql
    │   │   ├── 20260911051025_add_device_tokens_table
    │   │   │   └── migration.sql
    │   │   ├── 20260911053522_add_streak_user_relation
    │   │   │   └── migration.sql
    │   │   └── migration_lock.toml
    │   └── schema.prisma
    ├──📁 src
    │   ├──📁 config
    │   │   ├── env.ts
    │   │   └── prisma.ts
    │   ├──📁 controllers
    │   │   ├── admin.controller.ts
    │   │   ├── analytics.controller.ts
    │   │   ├── auth.controller.ts
    │   │   ├── contact.controller.ts
    │   │   ├── deviceToken.controller.ts
    │   │   ├── report.controller.ts
    │   │   ├── task.controller.ts
    │   │   └── user.controller.ts
    │   ├──📁 generated
    │   │   └──📁 prisma
    │   │       ├──📁 internal
    │   │       │   ├── class.ts
    │   │       │   ├── prismaNamespace.ts
    │   │       │   └── prismaNamespaceBrowser.ts
    │   │       ├──📁 models
    │   │       │   ├── Account.ts
    │   │       │   ├── DailyActivity.ts
    │   │       │   ├── DeviceToken.ts
    │   │       │   ├── LeaderboardSnapshot.ts
    │   │       │   ├── Session.ts
    │   │       │   ├── Task.ts
    │   │       │   ├── TaskOccurrence.ts
    │   │       │   ├── User.ts
    │   │       │   ├── Verification.ts
    │   │       │   └── YearlyReport.ts
    │   │       ├── browser.ts
    │   │       ├── client.ts
    │   │       ├── commonInputTypes.ts
    │   │       ├── enums.ts
    │   │       └── models.ts
    │   ├──📁 lib
    │   │   └── auth.ts
    │   ├──📁 middlewares
    │   │   ├── admin.middleware.ts
    │   │   ├── auth.middleware.ts
    │   │   └── rateLimit.middleware.ts
    │   ├──📁 routes
    │   │   ├── admin.route.ts
    │   │   ├── analytics.route.ts
    │   │   ├── auth.route.ts
    │   │   ├── contact.route.ts
    │   │   ├── deviceToken.route.ts
    │   │   ├── report.route.ts
    │   │   ├── task.route.ts
    │   │   └── user.route.ts
    │   ├──📁 services
    │   │   ├── activity.service.ts
    │   │   ├── admin.service.ts
    │   │   ├── analytics.service.ts
    │   │   ├── contact.service.ts
    │   │   ├── cron.service.ts
    │   │   ├── deviceToken.service.ts
    │   │   ├── notificationWorker.service.ts
    │   │   ├── otp.service.ts
    │   │   ├── pdfReport.service.ts
    │   │   ├── report.service.ts
    │   │   ├── task.service.ts
    │   │   └── user.service.ts
    │   ├──📁 types
    │   │   ├── activity.type.ts
    │   │   ├── admin.type.ts
    │   │   ├── cron.type.ts
    │   │   ├── express.d.ts
    │   │   ├── notification.type.ts
    │   │   └── report.type.ts
    │   ├──📁 utils
    │   │   ├── date.util.ts
    │   │   ├── mail.util.ts
    │   │   └── response.util.ts
    │   ├──📁 validations
    │   │   ├── analytics.validation.ts
    │   │   ├── auth.validation.ts
    │   │   ├── contact.validation.ts
    │   │   ├── deviceToken.validation.ts
    │   │   ├── report.validation.ts
    │   │   ├── task.validation.ts
    │   │   └── user.validation.ts
    │   ├──📁 app.ts
    │   └──📁 server.ts
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── prisma.config.ts
    └── tsconfig.json
```

---

