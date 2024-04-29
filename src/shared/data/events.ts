import { btlEvents } from "./btl";
import { corporateEvents } from "./corporate-events";
import { Event } from "shared/types/event.interface";

export const events: Event[] = [...btlEvents, ...corporateEvents];
