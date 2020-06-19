<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Firebase\Auth\Token\Verifier;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(Verifier::class, function ($app) {
            return new Verifier('chat-6a3e7');
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
