export enum RESTProjectClientSideOptions {
    Required = "required",
    Optional = "optional",
    Unsupported = "unsupported",
    Unknown = "unknown"
};

export enum RESTProjectServerSideOptions {
    Required = "required",
    Optional = "optional",
    Unsupported = "unsupported",
    Unknown = "unknown"
};

export enum RESTProjectTypeOptions {
    Mod = "mod",
    Modpack = "modpack",
    ResourcePack = "resourcepack",
    Shader = "Shader"
};

export enum RESTProjectMonetizationStatusOptions {
    Monetized = "monetized",
    Demonetized = "demonetized",
    ForceDemonetized = "force-demonetized"
};

export enum RESTProjectStatusOptions {
    Approved = "approved",
    Archived = "archived",
    Rejected = "rejected",
    Draft = "draft",
    Unlisted = "unlisted",
    Processing = "processing",
    Witheld = "withheld",
    Scheduled = "scheduled",
    Private = "private",
    Unknown = "unknown"
};

export enum RESTProjectRequestedStatusOptions {
    Approved = "approved",
    Archived = "archived",
    Unlisted = "unlisted",
    Private = "private",
    Draft = "draft"
};

export enum RESTProjectSearchParametersIndex {
    Relevance = "relevance",
    Downloads = "downloads",
    Follows = "follows",
    Newest = "newest",
    Updated = "updated"
};

export enum RESTCollectionStatusOptions {
    Private = "private",
    Public = "public",
    Unlisted = "unlisted"
};

export enum RESTNotificationTypeOptions {
    ProjectUpdate = "project_update",
    TeamInvite = "team_invite",
    StatusChange = "status_change",
    ModeratorMessage = "moderator_message"
};

export enum RESTGameVersionTypeOptions {
    Release = "release",
    Snapshot = "snapshot",
    Alpha = "alpha",
    Beta = "beta",
};

export enum RESTReportItemTypeOptions {
    Project = "project",
    User = "user",
    Version = "version"
};

export enum RESTThreadMessageTypeOptions {
    Project = "project",
    Report = "report",
    DirectMessage = "direct_message"
};

export enum RESTThreadMessageBodyTypeOptions {
    StatusChange = "status_change",
    Text = "text",
    ThreadClosure = "thread_closure",
    Deleted = "deleted"
};

export enum RESTUserPayoutWalletOptions {
    PayPal = "paypal",
    Venmo = "venmo"
};

export enum RESTUserPayoutWalletTypeOptions {
    Email = "email",
    Phone = "phone",
    UserHandle = "user_handle"
};

export enum RESTUserRoleOptions {
    Admin = "admin",
    Moderator = "moderator",
    Developer = "developer"
};

export enum RESTVersionTypeOptions {
    Release = "release",
    Beta = "beta",
    Alpha = "alpha"
};

export enum RESTVersionStatusOptions {
    Listed = "listed",
    Archived = "archived",
    Draft = "draft",
    Unlisted = "unlisted",
    Scheduled = "scheduled",
    Unknown = "unknown"
};

export enum RESTVersionRequestedStatusOptions {
    Listed = "listed",
    Archived = "archived",
    Draft = "draft",
    Unlisted = "unlisted"
};

export enum RESTVersionFileTypeOptions {
    RequiredResourcePack = "required-resource-pack",
    OptionalResourcePack = "optional-resource-pack"
};

export enum RESTDependencyTypeOptions {
    Required = "requiored",
    Optional = "optional",
    Incompatible = "incompatible",
    Embedded = "embedded"
};