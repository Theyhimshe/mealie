from typing import TYPE_CHECKING

from sqlalchemy import ForeignKey, String, orm
from sqlalchemy.orm import Mapped, mapped_column

from .._model_base import BaseMixins, SqlAlchemyBase
from .._model_utils import GUID, auto_init

if TYPE_CHECKING:
    from group import Group


class GroupDataExportsModel(SqlAlchemyBase, BaseMixins):
    __tablename__ = "group_data_exports"
    id: Mapped[GUID] = mapped_column(GUID, primary_key=True, default=GUID.generate)

    group: Mapped["Group"] = orm.relationship("Group", back_populates="data_exports", single_parent=True)
    group_id: Mapped[GUID] = mapped_column(GUID, ForeignKey("groups.id"), index=True)

    name: Mapped[str] = mapped_column(String, nullable=False)
    filename: Mapped[str] = mapped_column(String, nullable=False)
    path: Mapped[str] = mapped_column(String, nullable=False)
    size: Mapped[str] = mapped_column(String, nullable=False)
    expires: Mapped[str] = mapped_column(String, nullable=False)

    @auto_init()
    def __init__(self, **_) -> None:
        pass
