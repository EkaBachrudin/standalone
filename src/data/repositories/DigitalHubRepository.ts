import { DigitalHubRepositoryInterface } from "@/domain/interfaces/digHubInterface";
import { HeroBannerMock } from "../api/digital-hub/digitalHubMock";
import { HeroBannerApi } from "../api/digital-hub/digitalHubApi";


const USE_MOCK = true;

export const digitalHubRepository: DigitalHubRepositoryInterface = USE_MOCK
    ? new HeroBannerMock() : new HeroBannerApi()