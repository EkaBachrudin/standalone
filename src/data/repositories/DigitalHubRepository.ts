import { DigitalHubRepositoryInterface } from "@/domain/interfaces/digHubInterface";
import { HeroBannerApi } from "../api/menu/digital-hub/digitalHubApi";
import { HeroBannerMock } from "../api/menu/digital-hub/digitalHubMock";


const USE_MOCK = true;

export const digitalHubRepository: DigitalHubRepositoryInterface = USE_MOCK
    ? new HeroBannerMock() : new HeroBannerApi()