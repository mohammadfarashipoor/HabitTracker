<template>
  <section class="home__panel-container panel-container">
    <div class="panel-container__activity-program activity-program">
      <div
        class="activity-program__profile-header profile-header profile-header_mobile"
      >
        <div class="profile-header__title-container title-container">
          <div class="title-container__profile-image">
            <img
              class="title-container__avatar"
              src="@/assets/images/icons/Avatar.svg"
              alt="avatar"
            />
          </div>
          <div
            class="title-container__personal-info"
            @click="() => setShow(!Show)"
          >
            <b class="title-container__name font-16">بهنام وهانی</b>
            <span class="title-container__events font-14">3 رویداد</span>
          </div>
        </div>
        <div class="profile-header__action-container action-container">
          <input
            class="toggle action-container__input"
            type="checkbox"
            id="theme-toggle"
            v-model="themeToggle"
            @click="changeTheme"
          />
          <div class="action-container__notification notification">
            <img
              class="notification__image"
              src="@/assets/images/icons/notification.svg"
            />
            <div class="notification__new"></div>
          </div>
        </div>
      </div>
      <div class="activity-program__panel-context panel-context">
        <div class="panel-context__datepicker">
          <PersianCalendar />
        </div>
        <div class="panel-context__context-article context-article">
          <b class="context-article__title font-16">رویدادهای امروز</b>
          <div class="context-article__event event">
            <Event
              v-for="event in events"
              :event="event"
              @removeCard="() => removeCard(event, events, setEvents)"
              :tiny="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
