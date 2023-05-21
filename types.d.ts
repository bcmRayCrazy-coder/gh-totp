declare interface OtpGenerator {
    genOTP(): string,
    gaURL(user: string, issuer: string): string
}

declare interface OtpGeneratorConstructor {
    new(key: string): OtpGenerator
    randomKey(): string
}

declare var TOTP: OtpGeneratorConstructor
declare const code: HTMLElement