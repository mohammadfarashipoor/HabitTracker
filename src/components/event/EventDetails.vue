<script setup>
import Avatars from "@/components/shared/avatars/Avatars.vue";
import AddAvatar from "@/components/shared/avatars/AddAvatar.vue";

// static event data
const avatar = [
  {
    id: 1,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar.svg",
  },
  {
    id: 2,
    name: "کیارش",
    active: true,
    imageSrc: "src/assets/images/people/Avatar(1).svg",
  },
  {
    id: 3,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(2).svg",
  },
  {
    id: 4,
    name: "کیارش",
    active: true,
    imageSrc: "src/assets/images/people/Avatar(3).svg",
  },
  {
    id: 5,
    name: "کیارش",
    active: true,
    imageSrc: "src/assets/images/people/Avatar(4).svg",
  },
  {
    id: 6,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(3).svg",
  },
  {
    id: 7,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(1).svg",
  },
  {
    id: 8,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(2).svg",
  },
];
</script>

<template>
  <div class="activities__activity-component activity-component">
    <p class="activity-component__activity-description">
      سریع رفتن در ساعات اولیه باعث کاهش انرژی می‌شود؛ باید میزان سرعت را با
      کندترین فرد گروه تنظیم کنید. سریع رفتن در ساعات اولیه باعث کاهش انرژی
      می‌شود. سریع رفتن در ساعات اولیه باعث کاهش انرژی می‌شود؛ باید میزان سرعت
      را با کندترین فرد گروه تنظیم کنید. سریع رفتن در ساعات اولیه باعث کاهش
      انرژی می‌شود. سریع رفتن در ساعات اولیه باعث کاهش انرژی می‌شود؛ باید میزان
      سرعت را با کندترین فرد گروه تنظیم کنید. سریع رفتن در ساعات اولیه باعث کاهش
      انرژی می‌شود
    </p>

    <div class="activity-component__activity-footer">
      <b class="activity-component__creator-topic">سازنده رویداد</b>
      <div class="activity-component__time-details time-details">
        <div class="time-details__date-time date-time">
          <img
            class="date-time__image"
            src="../../assets/images/icons/user.svg"
            alt=""
          />
          <small class="date-time__small"> آزاده محمدی</small>
        </div>
      </div>
    </div>
    <div class="activity-component__activity-footer">
      <b class="activity-component__time-topic">زمان فعالیت</b>
      <div class="activity-component__time-details time-details">
        <div class="time-details__date-time date-time">
          <img
            class="date-time__image"
            src="../../assets/images/icons/calendar.svg"
            alt=""
          />
          <small class="date-time__small"> 22 مهر</small>
        </div>
        <div class="time-details__date-time date-time">
          <img
            class="date-time__image"
            src="../../assets/images/icons/clock1.svg"
            alt=""
          />
          <small class="date-time__small"> ۸:۳۰ تا ۹:۴۵</small>
        </div>
      </div>
    </div>
    <div class="activity-component__activity-footer">
      <b class="activity-component__friends-topic">دوستان شرکت کننده</b>
      <div class="event-container__avatars avatars">
        <Avatars :images="avatar" />
        <AddAvatar :images="avatar" />
      </div>
    </div>
  </div>
</template>
<style></style>
