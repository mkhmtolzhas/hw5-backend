import { CreateEventDto } from './dtos/CreateEvent.dot';
import EventModel, { IEvent } from './models/Event';

class EventService {
    async getEventById(id: string): Promise<IEvent | null> {
        return await EventModel.findById(id).exec();
    }

    async getEventByCity(city: string): Promise<IEvent[]> {
        return await EventModel.find({ city: city }).exec();
    }

    async getEvents(): Promise<IEvent[]> {
        return await EventModel.find().exec();
    }

    async createEvent(createEventDto: CreateEventDto): Promise<IEvent> {
        const { name, description, date, location, duration, city } = createEventDto;
        const newEvent = new EventModel({
            name,
            description,
            date: new Date(date),
            location,
            duration,
            city
        });

        await newEvent.save();
        return newEvent;
    }
}

export default EventService;
