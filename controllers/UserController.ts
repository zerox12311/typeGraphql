import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class UserController {

    @Get("/users")
    getAll() {
        return "This action returns all users";
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        console.log(typeof id);
        
        return "This action returns user #" + (id + 1000);
    }

    @Post("/users")
    post(@Body() user: any) {
        return "Saving user...";
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }

}