<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $user = [
            'username' => 'admin',
            'email' => 'ilmansunannudin2@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt(123456),
            'api_key' => Str::random(15),
            'chunk_blast' => 100,
        ];

        User::create($user);
    }
}
